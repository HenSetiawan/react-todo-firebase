exports.getAllTaskList = () => {
  const data = [
    {
      id: 1,
      title: "Belajar React",
      description: "Belajar React dari youtube",
      date: "2001-10-23",
    },
    {
      id: 2,
      title: "Belajar Next",
      description: "Belajar Next dari youtube",
      date: "2001-10-23",
    },
    {
      id: 3,
      title: "Belajar Node",
      description: "Belajar Node dari youtube",
      date: "2001-10-23",
    },
  ];

  return data;
};

exports.getUnfinishedTask = () => {
  const data = [
    {
      id: 2,
      title: "Belajar Next",
      description: "Belajar Next dari youtube",
      date: "2001-10-23",
    },
    {
      id: 3,
      title: "Belajar Node",
      description: "Belajar Node dari youtube",
      date: "2001-10-23",
    },
  ];
  return data;
};

exports.getFinishedTask = () => {
  const data = [
    {
      id: 1,
      title: "Belajar React",
      description: "Belajar React dari youtube",
      date: "2001-10-23",
    },
    {
      id: 1,
      title: "Belajar Webpack",
      description: "Belajar Webpack dari dicoding",
      date: "2001-10-23",
    },
  ];

  return data;
};
