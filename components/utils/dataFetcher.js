const dataFetcher = async function (url = undefined) {
    const response = await fetch(url);
    const payload = await response;
  
    return payload;
  };
  
  export { dataFetcher };