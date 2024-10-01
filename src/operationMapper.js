const operationMapper = (operation) => {
  const mapper = {
    sum: '+',
    sub: '-',
    mult: '*',
    div: '/'
  }
  
  return mapper[operation];
}

export default operationMapper;