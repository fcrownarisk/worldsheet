// 谐振子的初始状态
let p1 = 'amplitudeX'
let p2 = 'amplitudeY'
let p3 = 'angularFrequencyX'
let p4 = 'angularFrequencyY'
const amplitudeX = 100; // x轴振幅
const amplitudeY = 100; // y轴振幅
const angularFrequencyX = 2 * Math.PI / 5; // x轴角频率
const angularFrequencyY = 2 * Math.PI / 4; // y轴角频率
const offsetX = 0; // x轴相位偏移
const offsetY = Math.PI / 2; // y轴相位偏移
function updatePosition() {
  let time = new Date().getTime() / 1000; // 获取当前时间（秒）
  let x = amplitudeX * Math.sin(angularFrequencyX * time + offsetX);
  let y = amplitudeY * Math.sin(angularFrequencyY * time + offsetY);
  // 更新谐振子的位置
  let oscillator = document.getElementById('oscillator');
  oscillator.style.transform = `translate({x}px,{y}px)`;
  return [x,y]
}
// 使用requestAnimationFrame来更新位置
function animate() {
  requestAnimationFrame(animate);
  updatePosition();
}
animate();
