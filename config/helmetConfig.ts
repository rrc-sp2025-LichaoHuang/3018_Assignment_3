import helmet from "helmet";

export const getHelmetConfig = () => {
  return helmet({
    contentSecurityPolicy: false,
    hidePoweredBy: true,
    noSniff: true,
  });
};