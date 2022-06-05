export const parseEnv = () => {
  const envVariables = Object.keys(process.env).filter(key => key.slice(0, 4) === 'RSS_');
  envVariables.forEach(item => {
    console.log(`${item}=${process.env[item]}`);
  });
};

parseEnv();

// for test bash: $ RSS_name1=value1 RSS_name2=value2 node env
