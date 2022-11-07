import { AppAccordion } from 'components/ui/AppAccordion';
import markdown from 'markdown-it';

const { render } = markdown();

export type Experience = {
  title?: string;
  index: number;
  duration: string;
  company: string;
  content: string;
};

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
                    <p className="accordion__title">
                      {exp.title}{' '}
                      <span className="accordion__title--highlight">
                        {exp.company}
                      </span>
                    </p>
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
