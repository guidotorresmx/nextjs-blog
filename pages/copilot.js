import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function copilot() {
  const W = 500;
  const H = 500;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 id="getting-started">Getting started</h1>
        <p>
          So, I&#39;ve recently received my github copilot preview access and I
          wanted to use it ASAP, unfortunately, I didn&#39;t have the
          opportunity to test it up until now, for which I feel very exited
          about, so I wanted to write a hands-on post on the topic.
        </p>
        <h1 id="have-you-got-the-preview-access-">
          Have you got the preview access?
        </h1>
        <p>
          Once copilot is out, it will be available for everybody for a cheap
          price
          <del>
            selling your soul to the microsoft which I&#39;d say is a reasonable
            price for the experience
          </del>
          , or maybe for free <del>if nobody pays for it</del>, but we&#39;ll
          have to wait up until then. fortunately I&#39;ve already got my
          preview access approved, which can be confirmed by looking at the next
          screenshot, so I decided to make a guide on how to set everything up
          and add it to my tools repertory at once.
        </p>
        <Image
          src="/preview-approval.png"
          alt="preview approval"
          width={W * 1.5}
          height={H}
        />
        <h1 id="setting-everything-up">Setting everything up</h1>
        <h2 id="getting-the-sauce">Getting the sauce</h2>
        <p>
          The installation process is quite straight forward, and it&#39;s
          available for the most popular IDEs{" "}
          <strong>aka VSCODE, JetBrains and Neovim</strong>
          <del>this has to be a joke, where is atom???</del> which have
          demonstrated their value to the community in every occasion. Because
          I&#39;m
          <del>not a soulless being</del> used to <strong>VSCODE</strong>,
          I&#39;ll just set a new workspace in there. So first step is getting
          to the extensions page within VSCODE and look up for &quot;Github
          Copilot Extension&quot;.
        </p>
        <Image
          src="/copilot-extension.png"
          alt="copilot extension"
          width={W * 1.5}
          height={H}
        />
        <h3 id="signing-in">Signing in</h3>
        <p>
          The extension will show a pop up in the bottom right side of your
          VSCODE window, where you&#39;ll have to sign in with github, just
          click accept to everything that could come up after that and
          you&#39;ll be okay.
        </p>
        <Image
          src="/sign-in.png"
          alt="sign-in pop up"
          width={W * 1.5}
          height={H}
        />
        <Image
          src="/authorization.png"
          alt="authorization"
          width={W * 1.5}
          height={H}
        />
        <h3 id="first-usage">First usage</h3>
        <p>
          The only thing left for you to do is to create a testing file.
          I&#39;ll go by creating a <code>test.js</code> file and then start
          typing a function prototype, if everything works, a drop down
          suggestions attachment is going to show, there you&#39;ll have to
          press <code>tab</code> to accept the suggestion.
        </p>
        <Image
          src="/first-suggestion.png"
          alt="firs suggestion"
          width={W * 1.5}
          height={H}
        />
        <Image
          src="/accept-suggestion.png"
          alt="accept suggestion"
          width={W * 1.5}
          height={H}
        />
        <h3 id="alternatives">Alternatives</h3>
        <p>
          If the first suggestion doesn&#39;t fit your needs, you can press
          <code>Alt + ]</code> or <code>Alt + [</code> to navigate trough some
          more options or you can press <code>Ctrl + Enter</code> to open up a
          new panel where you can inspect all suggestions at once. You can Also
          add comments before your function declaration and copilot will take
          that into consideration in order to provide more accurate results
        </p>
        <h3 id="beyond-js">Beyond JS</h3>
        <p>
          Even tho copilot could be a great tool, it could not help anybody if
          the supported languages are limited to the top 3 most used languages
          <del>aka JS, Python and Matlab, amerite?</del>. So I tried to get a
          curated list of the supported file extensions for this preview stage
          and I could not find anything{" "}
          <del>Even tho I googled it once, seriously?</del> so I&#39;ll dig
          deeper in a future article, but for the sake of demonstration, I
          created a bash file and OMG it actually worked.
        </p>
        <p>
          <Image
            src="/bash-file.png"
            alt="bash file"
            width={W * 1.5}
            height={H}
          />
        </p>
        <h2 id="wrapping-up">Wrapping Up</h2>
        <p>
          So copilot is actually working, but I&#39;ll have to test it
          extensively before throwing up my opinion about its usability and
          possibilities. but I want to add that some people are quite worried
          because of this type of tool and the possibility of{" "}
          <del>everybody getting fired</del> reducing the amount of hours a
          programmer can actually work, but the thing is that the programmers
          daytime is not actually 100% programming, it is in fact mostly
          reading, debugging, setting up tools, coming up with ideas,
          communicate them; so for the time being I wouldn&#39;t be worried
          because of this, specially because there are a hell lot more of
          important problems out there to worry about, such as: global warming,
          war, hunger and the sharknado&#39;s saga. bye!
        </p>
      </main>
    </div>
  );
}
