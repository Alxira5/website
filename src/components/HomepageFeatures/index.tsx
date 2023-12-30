import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Contributing to the future',
    description: (
      <>
        I develop tools and utilities that will help you with your work and activities, which are totally free.
      </>
    ),
  },
  {
    title: 'Creativity and fantasy',
    description: (
      <>
        In addition to being a software developer, I also like to express my creativity and my fantasy worlds in comics and conceptual arts.
      </>
    ),
  },
  {
    title: 'Defending Freedom',
    description: (
      <>
        Free works are very scarce and are very important for the future of humanity and without them the world would be very gloomy.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
