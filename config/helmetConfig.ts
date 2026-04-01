import helmet from "helmet";

export const getHelmetConfig = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  // Base configuration for APIs
  const baseConfig = {
    contentSecurityPolicy: false,
    hidePoweredBy: true,
    noSniff: true,
  };

  // Development environment
  if (isDevelopment) {
    return helmet({
      ...baseConfig,
      hsts: false,
    });
  }

  // Production environment (more secure)
  return helmet({
    ...baseConfig,
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    frameguard: {
      action: "deny",
    },
    referrerPolicy: {
      policy: "no-referrer",
    },
  });
};