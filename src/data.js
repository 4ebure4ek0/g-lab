const data = [
    {
      title: 'title',
      checked: false,
      categories: [
        { title: 'title', checked: false },
        { title: 'title', checked: false },
        { title: 'title', checked: false },
        {
          title: 'title',
          checked: false,
          categories: [
            { title: 'title', checked: true },
            { title: 'title', checked: false },
            { title: 'title', checked: false },
            { title: 'title', checked: false },
            {
              title: 'title',
              checked: false,
              categories: [
                { title: 'title', checked: false },
                { title: 'title', checked: false },
                { title: 'title', checked: false }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'title',
      checked: false,
      categories: [
        { title: 'title', checked: false },
        { title: 'title', checked: false },
        { title: 'title', checked: false },
        { title: 'title', checked: false }
      ]
    }
  ];
  
  export default data;
  