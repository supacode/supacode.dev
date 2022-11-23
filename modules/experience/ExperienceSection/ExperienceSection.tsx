import { AppAccordion } from 'components/ui/AppAccordion';
import type { Experience } from 'modules/experience/types';
import markdown from 'markdown-it';

type ExperienceProps = {
  experiences: Experience[];
};

export const ExperienceSection: React.FC<ExperienceProps> = ({
  experiences,
}) => {
  return (
    <section className="experience">
      <h2 className="experience__title" id="experience">
        Experience
      </h2>

      {experiences?.length > 0 ? (
        <>
          {experiences.map((exp) => (
            <div className="experience__item" key={exp.index}>
              <AppAccordion
                title={exp.title}
                index={experiences.indexOf(exp)}
                head={
                  <div className="experience__head">
                    <div className="accordion__title">
                      <h3>{exp.title}</h3>

                      <p className="accordion__title--highlight">
                        {exp.company}
                        {exp.location ? `, ${exp.location}` : null}
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
          ))}
        </>
      ) : (
        <p>No experience</p>
      )}
    </section>
  );
};
