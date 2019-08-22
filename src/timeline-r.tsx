import React, { useState, useEffect, useMemo } from 'react';
import { scaleTime, scaleOrdinal, min, max, axisBottom, select, scaleLinear, timeFormat } from 'd3';
import values from 'ramda/es/values';
import sort from 'ramda/es/sort';
import reduce from 'ramda/es/reduce';
import countBy from 'ramda/es/countBy';
import mapObjIndexed from 'ramda/es/mapObjIndexed';
import pipe from 'ramda/es/pipe';
import MultiMap from 'mnemonist/multi-map';
import { translate, STATUS_SLUG } from './utils';
import './timelines.css'
import cx from 'classnames';

const colorScale = scaleOrdinal(['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']).domain(values(STATUS_SLUG));
const legend = {
  height: 50,
}
const margins = {
  top: 0,
  right: 0,
  bottom: 50,
  left: 0
};
const formater = timeFormat('%Y');

const dateReducer = (accumulator, link: Link) => accumulator + (+link.end_year) - +link.start_year

const sortByDuration = sort(([, aLinks], [, bLinks]) => bLinks.reduce(dateReducer, 0) - aLinks.reduce(dateReducer, 0));
const countByStatus = pipe(
  reduce((acc, [, links]: [Entity, Link[]]) => [...acc, ...links], []),
  countBy((link: Link) => link.status.slug),
);

const Timelines: React.FC<{
  data: MultiMap<Entity, Link>;
  hideGroupLabels?: boolean;
  intervalMinWidth: number;
  lineHeight: number;
  width: number;
  onLinkClick: (link: Link) => void;
}> = props => {
  const data: [Entity, Link[]][] = useMemo(() => sortByDuration(Array.from(props.data.associations() as any)), [props.data]);
  const minDate = min(data, ([{start}]) => start);
  const maxDate = max(data, ([{end}]) => end);
  const width = props.width - margins.left - margins.right;
  const elHeight = props.data.dimension * props.lineHeight + margins.top + margins.bottom;
  const height = elHeight - margins.top - margins.bottom;
  const groupWidth = props.hideGroupLabels ? 0 : 200;
  const groupHeight = height / data.length;
  const intervalRectWidth = (d: Link) => Math.max(props.intervalMinWidth, xScale(d.end_year) - xScale(d.start_year))
  const xScale = scaleTime()
    .domain([minDate, maxDate])
    .range([groupWidth, width]);
  const yScale = scaleLinear()
    .domain([0, props.data.dimension])
    .range([0, height]);
  const xAxis = axisBottom(xScale);
  const intervalBarHeight = 0.8 * groupHeight;
  const intervalBarMargin = (groupHeight - intervalBarHeight) / 2;
  const [hover, setHover] = useState<{link: Link, index: number}>();
  const [status, setStatus] = useState<STATUS_SLUG>();
  const countedByStatus = useMemo(() => countByStatus(data), [data]);
  useEffect(() => () => {setHover(null); setStatus(null)}, [props.data]);
  return (
    <div className='timelines-container' style={{width: width}} /* onMouseLeave={() => setHover(null)} */ >
      {hover && <div className='tooltip-container' style={{
        transform: `translate(${xScale(hover.link.start_year)}px, ${yScale(hover.index) + legend.height + margins.top + props.lineHeight}px)`,
        minWidth: intervalRectWidth(hover.link)
      }}>
        <span className='tooltip'>{hover.link.COW_name} was a {hover.link.status.slug} from {formater(hover.link.start_year)} to {formater(hover.link.end_year)}</span>
      </div>}
      <div className='legend-container'>
        {values(mapObjIndexed((number, label) => 
          <button onClick={() => status === label ? setStatus(null) : setStatus(label)} className={cx({
            'legend-item': true,
            'legend-item--hidden': status && status !== label,
          })} key={label} style={{backgroundColor: colorScale(label)}}>{label} : {number}</button>
        , countedByStatus))}
      </div>
      <svg height={elHeight} width={props.width}>
        <g transform={translate(margins.left, margins.top)}>
          <defs>
          <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2
                    M0,4 l4,-4
                    M3,5 l2,-2"
              style={{stroke: 'black', strokeWidth: 1}} />
            </pattern>
            <clipPath id='chart-content'>
              <rect x={groupWidth} y={0} height={height} width={width - groupWidth} />
            </clipPath>
            <clipPath id='name-area'>
              <rect x={0} y={0} height={height} width={groupWidth} />
            </clipPath>
          </defs>
          <g transform={translate(0, height)} ref={element => {
            if (element) {
              select(element).call(xAxis);
            }
          }} />
          <g className={cx({
            group: true,
            has_status: !!status
          }, status)}>
            {data.map(([entity, links], index) => {
              return (
                <g key={entity.name} className={entity.name} transform={translate(0, yScale(index))}>
                  <line className='group-separator' x1={0} x2={width} y1={0} y2={0} stroke='black' strokeOpacity={0.1} />
                  <text className='entity-label' fontSize={props.lineHeight} dy='1em'>{entity.name}</text>
                  <g>
                    {links.map((link: Link) => {
                      const w = intervalRectWidth(link);
                      return (
                        <g key={link.id} transform={translate(xScale(link.start_year), intervalBarMargin)}>
                          <rect
                            rx='5'
                            className={cx('link-rect', link.status.slug)}
                            onClick={() => props.onLinkClick(link)}
                            onMouseEnter={() => setHover({link: link, index: index})}
                            fill={isNaN(w) ? "url(#diagonalHatch)" : colorScale(link.status.slug)}
                            stroke={hover && hover.link === link ? 'white' : 'black'}
                            strokeOpacity={hover && hover.link === link ? 1 : 0.2}
                            strokeWidth={hover && hover.link === link ? 2 : 1}
                            width={isNaN(w) ? '100%' : w}
                            height={intervalBarHeight}
                            y={0}
                            x={0}
                          />
                        </g>
                      )
                    })}
                  </g>
                </g>
              )
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Timelines;
