const getOperationFromUrl = (url) => {
  const reg = /\/(?<operation>\w+)/g;
  const result = reg.exec(url);
  const { operation } = result.groups;

  return operation;
}

export default getOperationFromUrl;