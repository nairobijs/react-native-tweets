import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js';

export const log = string => {
  console.log('──────────*******************───────────');
  console.log(' ');
  console.log(`          ${JSON.stringify(string)}`);
  console.log(' ');
  console.log('──────────*******************───────────');
}

export const spyMessageQueue = object => {
  MessageQueue.spy(msg => {
    switch(msg.module) {
      case 'RCTDeviceEventEmitter':
        break;
      case 'Timing':
        break;
      case 'JSTimers':
        break;
      case 'WebSocketModule':
        break;
      case 'UIManager':
        switch(msg.method) {
          case 'createView':
            break;
          case 'setChildren':
            break;
          case 'measureInWindow':
            break;
          case '<callback for UIManager.measureInWindow>':
            break;
          default:
            log(msg)
        }
        break;
      case 'NativeAnimatedModule':
        // switch(msg.method) {
        //   case 'createAnimatedNode':
        //     break;
        //   case 'connectAnimatedNodes':
        //     break;
        //   case 'disconnectAnimatedNodes':
        //     break;
        //   case 'dropAnimatedNode':
        //     break;
        //   default:
        //     log(msg)
        // }
        break;
      default:
        log(msg)
    }
  });
}

