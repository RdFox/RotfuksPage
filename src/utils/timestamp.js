export default function timeStamp() {
  const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date().toLocaleString('en-US', options);
}
