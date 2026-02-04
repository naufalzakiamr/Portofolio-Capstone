import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    php,
    laravel,
    react,
    tailwind,
    bootstrap,
    flutter,
    figma,
    vscode,
    git,
    github,
    npm,
    postman,
    androidstudio,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      {/* Web Development Tools */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading font-semibold mb-4 flex items-center gap-2">
          <span>🌐</span> Web Development Tools
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-4">
          <img src={html} title="HTML5" alt="HTML5" />
          <img src={css} title="CSS3" alt="CSS3" />
          <img src={js} title="JavaScript" alt="JavaScript" />
          <img src={php} title="PHP" alt="PHP" />
          <img src={laravel} title="Laravel" alt="Laravel" />
          <img src={react} title="React.js" alt="React.js" />
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        </div>
      </section>

      {/* Mobile Development Tools */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading font-semibold mb-4 flex items-center gap-2">
          <span>📱</span> Mobile Development Tools
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-4">
          <img src={flutter} title="Flutter" alt="Flutter" />
        </div>
      </section>

      {/* Design Tools */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading font-semibold mb-4 flex items-center gap-2">
          <span>🎨</span> Design Tools
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-4">
          <img src={figma} title="Figma" alt="Figma" />
        </div>
      </section>

      {/* Development & Collaboration Tools */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading font-semibold mb-4 flex items-center gap-2">
          <span>⚙️</span> Development & Collaboration Tools
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-4">
          <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
          <img src={git} title="Git" alt="Git" />
          <img src={github} title="GitHub" alt="GitHub" />
          <img src={npm} title="NPM" alt="NPM" />
        </div>
      </section>

      {/* API & Testing Tools */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading font-semibold mb-4 flex items-center gap-2">
          <span>🧪</span> API & Testing Tools
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-4">
          <img src={postman} title="Postman" alt="Postman" />
        </div>
      </section>

      {/* Mobile IDE Tools */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading font-semibold mb-4 flex items-center gap-2">
          <span>💻</span> Mobile IDE Tools
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-4">
          <img src={androidstudio} title="Android Studio" alt="Android Studio" />
        </div>
      </section>
    </main>
  );
}

export default Technologies;