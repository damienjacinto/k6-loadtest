import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '30s', target: 0 },
    { duration: '1m', target: 20 },
    { duration: '5m', target: 1000 },
    { duration: '1m', target: 20 },
    { duration: '30s', target: 0 },
  ],
};
export default function () {
  let res = http.get('http://whoami/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
