export default {
  // 同时支持 GET 和 POST
  'GET /api/users/:id': (req, res) => {
    const { id } = req.params;
    if (id === 1) {
      res.send({
        status: 200,
        data: {
          name: '桔梗',
          userid: '1',
          department: '研发部门',
          avatar: 'x.png',
        },
        message: 'OK',
      });
    } else if (id === 2) {
      res.send({
        status: 500,
        data: {
          name: '桔梗',
          userid: '1',
          department: '研发部门',
          avatar: 'x.png',
        },
        message: 'OK',
      });
    } else {
      res.send({
        status: 401,
        data: {
          name: '桔梗',
          userid: '1',
          department: '研发部门',
          avatar: 'x.png',
        },
        message: 'OK',
      });
    }
  },

  // 支持参数
  'POST /api/users/:id': (req, res) => {
    const { id } = req.params;
    res.send({ id });
  },
};

