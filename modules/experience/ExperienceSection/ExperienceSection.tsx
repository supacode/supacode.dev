import cn from 'classnames';
import markdown from 'markdown-it';

import { AppAccordion } from 'components/ui/AppAccordion';
import type { Experience } from 'modules/experience/types';
import { AppLink } from 'components/ui/AppLink';

type ExperienceProps = {
  experiences: Experience[];
};

export const ExperienceSection: React.FC<ExperienceProps> = ({
  experiences,
}) => (
  <section className="experience" id="experience">
    <h2 className="experience__title">Experience</h2>

    {experiences?.length > 0 ? (
      <>
        {experiences.map((exp) => {
          const companyName =
            exp.company + (exp.location ? `, ${exp.location}` : '');

          return (
            <div className="experience__item" key={exp.index}>
              <AppAccordion
                title={exp.title}
                index={experiences.indexOf(exp)}
                head={
                  <div className="experience__head">
                    <div className="accordion__title">
                      {exp.title && <h3>{exp.title}</h3>}

                      <p
                        className={cn('accordion__title--company', {
                          'accordion__title--link': !!exp.website,
                        })}
                      >
                        {exp.company && (
                          // eslint-disable-next-line react/jsx-no-useless-fragment
                          <>
                            {exp.website ? (
                              <AppLink
                                className="accordion__title--link"
                                text={companyName}
                                to={exp.website}
                                newTab
                              />
                            ) : (
                              companyName
                            )}
                          </>
                        )}
                      </p>
                    </div>
                    <p className="accordion__duration">{exp.duration}</p>
                  </div>
                }
              >
                {exp.content && (
                  <div
                    className="accordion__description"
                    dangerouslySetInnerHTML={{
                      __html: markdown().render(exp.content),
                    }}
                  />
                )}
              </AppAccordion>
            </div>
          );
        })}
      </>
    ) : (
      <p>No experience</p>
    )}
  </section>
);
