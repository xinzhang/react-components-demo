export function generateData() {
  let obj =
    [{
      label: 'root1',
      value: 'root1',
      key: 'root1',
      children: [
        {
          label:'child1',
          value: 'child1',
          key: 'child1'
        },
        {
          label:'child2',
          value: 'child2',
          key: 'child2',
          children:[
            {
              label:'grandchild2',
              value: 'grandchild2',
              key: 'grandchild2',
            },
            {
              label:'grandchild2',
              value: 'grandchild2',
              key: 'grandchild2',
            }
          ]
        },
        {
          label:'child3',
          value: 'child3',
          key: 'child3'
        }
      ]
    }];
    return obj;
}

export const gData = generateData();
