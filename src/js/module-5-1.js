function task1(callback) {
  for (i = 0; i < 3; i += 1) {
    callback();
  }
}
task1(() => {
  console.log('hello');
});

//==================

() => {};
(x, y) => {};
x => {};

(x, y, q) => {
  return x + y + q;
};

(x, y, q) => x + y + q;

const pow = x => x ** 2;

const y = pow(10);

const pow2 = (x, y) => x ** y;

const t1 = pow(2, 3);

const selectUserId = state => state.user.userId;
