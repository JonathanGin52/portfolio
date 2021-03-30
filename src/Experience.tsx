import React, {Fragment, useState} from 'react';
// @ts-expect-error This package doesn't have a @types declaration >:(
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

import {
  ExperienceCategory,
  TimelineItemData,
  experience,
} from './data/timelineData';
import './styles/Experience.css';

type FilterOption = 'All' | ExperienceCategory;

const CATEGORY_TO_COLOUR: {[key in FilterOption]: string} = {
  All: '#A3BE8C',
  [ExperienceCategory.Work]: '#B48EAD',
  [ExperienceCategory.Project]: '#BF616A',
  [ExperienceCategory.Volunteer]: '#D08770',
};

const Experience = () => {
  const [filter, setFilter] = useState<FilterOption>('All');

  return (
    <section id="Experience">
      <h2>Experience</h2>
      <div className="filterControl">
        {Object.entries(CATEGORY_TO_COLOUR).map(([category, colour]) => {
          return (
            <button
              key={category}
              type="button"
              data-text={category}
              style={{color: colour}}
              className={`filterButton ${filter === category ? ' active' : ''}`}
              onClick={() => setFilter(category as FilterOption)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <Timeline lineColor="#5E81AC">
        {experience.map(
          ({
            date,
            title,
            subtitle,
            category,
            links,
            items,
          }: TimelineItemData) => {
            if (filter !== 'All' && filter !== category) return null;

            let linksMarkup = null;
            if (links) {
              linksMarkup = (
                <div className="linksContainer">
                  {links.map(({text, url}) => {
                    return (
                      <TimelineItemLink
                        key={text}
                        text={text}
                        url={url}
                        colour={CATEGORY_TO_COLOUR[category]}
                      />
                    );
                  })}
                </div>
              );
            }

            return (
              <TimelineItem
                key={title}
                dateText={date}
                dateInnerStyle={{background: CATEGORY_TO_COLOUR[category]}}
                bodyContainerStyle={{color: '#2E3440'}}
              >
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                {linksMarkup}
                {items.map((item, idx) => {
                  /* eslint-disable react/no-array-index-key */
                  return typeof item === 'string' ? (
                    <p key={idx}>{item}</p>
                  ) : (
                    <Fragment key={idx}>{item}</Fragment>
                  );
                  /* eslint-enable react/no-array-index-key */
                })}
              </TimelineItem>
            );
          },
        )}
      </Timeline>
    </section>
  );
};

interface TimelineItemLinkProps {
  text: string;
  url: string;
  colour: string;
}

const TimelineItemLink = ({text, url, colour}: TimelineItemLinkProps) => {
  const [active, setActive] = useState(false);

  const baseStyle = {
    color: colour,
    border: `2px solid ${colour}`,
  };
  const style = active ? {backgroundColor: colour, color: '#ECEFF4'} : {};

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      style={{...baseStyle, ...style}}
      className="timelineItemLink"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {text}
    </a>
  );
};

export default Experience;
