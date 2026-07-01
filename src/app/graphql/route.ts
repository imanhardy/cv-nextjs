import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { type NextRequest, NextResponse } from "next/server";
import { buildSchema } from "type-graphql";
import { MeResolver } from "../../apollo/resolvers";

const isDev = process.env.NODE_ENV !== "production";

let handler: (req: NextRequest) => Promise<Response>;

try {
  const schema = await buildSchema({
    resolvers: [MeResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    plugins: [
      isDev
        ? ApolloServerPluginLandingPageLocalDefault()
        : ApolloServerPluginLandingPageDisabled(),
    ],
    introspection: isDev,
    formatError: (err) => {
      if (isDev) {
        console.error("GraphQL Error:", err);
      }
      return {
        message: isDev ? err.message : "Internal server error",
        code: err.extensions?.code,
        path: err.path,
      };
    },
  });

  handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req) => ({ req }),
  });
} catch (error) {
  console.error("Failed to initialize Apollo Server:", error);

  // Fallback handler for initialization errors
  handler = async () => {
    return NextResponse.json(
      { error: "GraphQL server initialization failed" },
      { status: 500 }
    );
  };
}

export { handler as GET, handler as POST };
