exports.getAllTaskList = () => {
  const data = [
    {
      id: 1,
      title: "Belajar React",
      description: "Belajar React from youtube",
    },
    {
      id: 2,
      title: "Belajar Next",
      description: "Belajar Next from youtube",
    },
    {
      id: 3,
      title: "Belajar Node",
      description: "Belajar Node from youtube",
    },
  ];

  return data;
};

exports.getUnfinishedTask = () => {
  const data = [
    {
      id: 2,
      title: "Belajar Next",
      description: "Belajar Next from youtube",
    },
    {
      id: 3,
      title: "Belajar Node",
      description: "Belajar Node from youtube",
    },
  ];
  return data;
};

exports.getFinishedTask = () => {
  const data = [
    {
      id: 1,
      title: "Belajar React",
      description: "Belajar React from youtube",
    },
  ];

  return data;
};
