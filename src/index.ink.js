const {default: React, useState, useEffect, useRef, createElement} = require('react');
const {render, Text, useInput} = require('ink');
const {default: app} = require('./app');

const InkApp = () => {
  const updateFnRef = useRef();

  const [worldString, setWorldString] = useState('');

  useInput((input, key) => {
    if(key.leftArrow) {
      updateFnRef.current('left');
    } else if(key.rightArrow) {
      updateFnRef.current('right');
    } else if(key.upArrow) {
      updateFnRef.current('up');
    } else if(key.downArrow) {
      updateFnRef.current('down');
    }
  })

  useEffect(()=>{
    app(
      'Perpooply',
      10,
      10,
      (text) => {
        return setWorldString(text);
      },
      (update) => {
        updateFnRef.current = update;
      },
    );
  }, []);

  return createElement(Text, {}, worldString);
};

render(createElement(InkApp));
