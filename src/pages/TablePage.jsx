import React from 'react';
// import io from 'socket.io-client';
import logo from '../frodo.png';
import './table.css';
import { Link } from 'react-router-dom';
import { setData } from '../redux/actions/tableData';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../components/Table';

// const connectionOptions = {
//   'force new connection': true,
//   reconnectionAttempts: 'Infinity', //avoid having user reconnect manually in order to prevent dead clients after a server restart
//   timeout: 10000, //before connect_error and connect_timeout are emitted.
//   transports: ['websocket'],
// };

// const socket = io('http://testapi.marit.expert:3004', connectionOptions);

export const TablePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.table.data);

  React.useEffect(() => {
    // socket.onmessage = (message) => {
    //   // set data here
    //   console.log(message);
    // };
    // socket.send({ cmd: 'get_list' });

    // alternate because of cors policy
    dispatch(
      setData([
        { id: 1, name: 'Frodo', race: 'Hobbit' },
        { id: 2, name: 'Aragorn', race: 'Human' },
        { id: 3, name: 'Gimli', race: 'Dworf' },
        { id: 4, name: 'Legolas', race: 'Elf' },
      ]),
    );
  }, []);

  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <p>Table page</p>
      {data ? <Table /> : <div>PRELOADER</div>}
    </>
  );
};
