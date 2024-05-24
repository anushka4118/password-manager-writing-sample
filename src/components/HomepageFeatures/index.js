import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Description',
    description: (
      <>
        Draft a how-to article for setting up and using a password manager application (e.g., LastPass,
        Bitwarden). This guide inlcudes instructions on LastPass and its features including creating a master password, adding, and organizing passwords.
        The guide is dedicated to a small business managing the credentials to their online accounts (e.g. business subscriptions, social media accounts). 
        The objective of the guide is to help a non-technical audience (e.g. a business owner) use a password manager.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className="text--center padding-horiz--lg">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
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
