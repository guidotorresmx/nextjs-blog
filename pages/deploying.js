import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
export default function deploying() {
  const W = 500;
  const H = 500;

  const code = {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "PublicReadGetObject",
        Effect: "Allow",
        Principal: "*",
        Action: ["s3:GetObject"],
        Resource: ["arn:aws:s3:::<bucket-name>/*"],
      },
    ],
  };
  const code_h = JSON.stringify(code);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 id="intro">Intro</h1>
        <p>
          Once your awesome Hexo static website is up and running, you may want
          to deploy it so everybody on the internet can actually read it.
          fortunately, there are multiple choices, but being myself a humble AWS{" "}
          <del>brainwashed</del> enthusiast, I&#39;m going to introduce you to
          the github + github actions + route53 + s3 + CloudFront.
        </p>
        <p>
          Note: Ignore the fact that github is now another service property of{" "}
          <del>the devil himself in the shape of a corporation</del> Microsoft
          and just follow me on this one, because publishing your website using
          github will bring you up some useful features.
        </p>
        <h1 id="aws-setup">AWS setup</h1>
        <p>
          First things first, you have to go to{" "}
          <a href="https://console.aws.amazon.com/console/" title="aws console">
            AWS console webapp
          </a>{" "}
          and create your AWS account, and set up a specific user for this task;
          you must not use your root account!
        </p>
        <h2 id="step-1-create-a-new-user">Step 1: Create a new user</h2>
        <p>
          Once you&#39;d created your AWS account, go on and sign in, you will
          see a nice interface, with a top search omnibar. proceed and type IAM.
        </p>
        <Image
          src="/iam.png"
          alt="AWS search bar and IAM"
          width={W * 1.5}
          height={H}
        />
        <p>
          Then go to <strong>users</strong> on the left panel under{" "}
          <strong>access management</strong> and click on{" "}
          <strong>add Users</strong>; you just have to add a username, and a
          password policy.
        </p>
        <Image
          src="/iam-user-setup.png"
          alt="AWS new user and password policy"
          width={W * 1.5}
          height={H}
        />
        <h2 id="step-2-attach-necessary-policies">
          Step 2: Attach necessary policies
        </h2>
        <p>
          After clicking next, you will have to add attach the actual policies
          for your new user, type the services you need and check each one of
          them in the contiguous box. For the purpose of this walkthrough, the
          needed policies are the following (you will actually need a subset of
          this credentials, but that out of the scope for this post):
        </p>
        <ul>
          <li>CLoudFrontFullAccess</li>
          <li>Route53FullAccess</li>
          <li>S3FullAccess</li>
          <li>
            <p>
              <del>SendBitcoinWalletToGuidoTorresMXFullAccess</del>
            </p>
            <Image
              src="/iam-policies.png"
              alt="AWS new users policies"
              width={W * 1.5}
              height={H}
            />
          </li>
        </ul>
        <h2 id="step-3-manage-credentials">Step 3: Manage credentials</h2>
        <p>
          Once the new user is created, you will have full access to your
          generated credentials, so secure them before you lost them because
          you&#39;re never going to see them again (specially if you generated
          the optional console access keys) and try login in with the secure
          link shown in the screen.
        </p>
        <Image
          src="/iam-user-credentials.png"
          alt="AWS new user generated credentials"
          width={W * 1.5}
          height={H}
        />
        <h2 id="step-4-create-s3-bucket">Step 4: Create S3 bucket</h2>
        <p>
          The next step is quite easy, just navigate to S3 by search for it in
          the omnibar of the AWS Console and click on{" "}
          <strong>Create bucket</strong>. In the next screen choose a decent
          temporary name for your blog, such as s3-bucket-test (you will
          certainly not be able to choose that one because your bucket have to
          have a unique name across all AWS S3 containers online)
        </p>
        <Image
          src="/bucket.png"
          alt="AWS S3 Bucket creation"
          width={W}
          height={H}
        />
        <Image
          src="/bucket-options.png"
          alt="AWS S3 Bucket options"
          width={W}
          height={H}
        />
        <h2 id="step-5-buckets-and-s3-static-website-hosting">
          Step 5: Buckets and S3 static website hosting
        </h2>
        <p>
          After creating the bucket, select it and go to{" "}
          <strong>properties</strong>, the navigate to the bottom of the site
          until the <strong>static website hosting</strong> section shows up.
          Edit it and update the fields with the same info showed in the next
          image:
        </p>
        <p>
          <Image
            src="/bucket-template.png"
            alt="AWS S3 Bucket template"
            width={W}
            height={H}
          />
        </p>
        <h2 id="step-6-bucket-vs-public-access">
          Step 6: Bucket vs public access
        </h2>
        <p>
          Once the bucket is set, you have to make it available for the outside
          world, so you have to specify the policies attached to it: go to
          permissions tab in your bucket and select edit under bucket policy,
          then copy the next policy in it (protip: replace <em>bucket-name</em>{" "}
          with your bucket&#39;s name).
        </p>
        <div className={styles.card}>
          <SyntaxHighlighter
            wrapLines={false}
            language="javascript"
            showLineNumbers
          >
            {code_h}
          </SyntaxHighlighter>
        </div>
        <h1 id="wrapping-up">Wrapping up</h1>
        <p>
          Once everything is done, you could upload a simple index.html file to
          your bucket and view it rendered when visiting the site of your
          bucket. This is nice, but we are far from done and{" "}
          <del>I&#39;m falling asleep</del> I don&#39;t want you to get you
          overwhelmed, so this walkthrough will become a series of 4 parts 🤷‍♂️💁.{" "}
        </p>
      </main>
    </div>
  );
}
