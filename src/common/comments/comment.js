/**
 * Brainfock - Community & Business Management Solution
 *
 * @link http://www.brainfock.org
 * @copyright Copyright (c) 2015 Sergii Gamaiunov <hello@webkadabra.com>
 */
import {Record, List, Map} from 'immutable';

export default Record({
  cid: '',
  id: '',
  summary: '',
  text: '',
  contentRendered: '',
  entityId:'',

  // included via relations
  type: {},
  user: {},

  // state fields
  loading:true,
});


