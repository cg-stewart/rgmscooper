// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "rgmscooper",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const clerkPubKey = new sst.Secret("NEXTPUBLICKEY");
    const clerkSecretKey = new sst.Secret("CLERKSECRETKEY");
    const clerkSiginInUrl = new sst.Secret("CLERKSIGNINURL");
    const clerkSignUpUrl = new sst.Secret("CLERKSIGNUPURL");
    const clerkFallbackUrl = new sst.Secret("CLERKFALLBACKURL");

    const bucket = new sst.aws.Bucket("WavBucket", {});

    const table = new sst.aws.Dynamo("ScoopedVideosTable", {
      fields: {
        requestId: "string",
        status: "string",
        createdAt: "string",
      },
      primaryIndex: {
        hashKey: "requestId",
      },
      globalIndexes: {
        StatusIndex: {
          hashKey: "status",
          rangeKey: "createdAt",
          projection: "all",
        },
      },
    });

    new sst.aws.Nextjs("RGMscooper", {
      link: [bucket, table],
      domain: {
        name: "rgmscooper.com",
        redirects: ["www.rgmscooper.com"],
      },
      environment: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: clerkPubKey.value,
        CLERK_SECRET_KEY: clerkSecretKey.value,
        CLERK_SIGN_IN_URL: clerkSiginInUrl.value,
        CLERK_SIGN_UP_URL: clerkSignUpUrl.value,
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: clerkFallbackUrl.value,
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: clerkFallbackUrl.value,
      },
    });
  },
});
