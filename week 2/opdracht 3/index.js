import http  from 'node:http';
import os from 'node:os';

http.createServer(function (req, res) {
    res.setHeader('Content-type', 'text/html');
    res.write(`<ul>
    <li>${os.type()}</li>
    <li>${os.platform()}</li>
    <li>${os.release()}</li>
    </ul>
    
    `); 
    res.end(); 
  }).listen(8080);