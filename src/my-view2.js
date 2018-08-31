/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/iron-ajax/iron-ajax.js';
import './book';

class MyView2 extends PolymerElement {
    static get template() {
        return html `            
        <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      
      <link rel="import" href="./webComponents/book.html">

        <iron-ajax
                auto
                url="src/index.json"
                handle-as="json"
                last-response="{{response}}"
                >
        </iron-ajax>

        <template is="dom-repeat" items={{response}}>
            <div class="card">    
                <span>{{item.isbn}}</span>
                <h1>{{item.title}}</h1>
                <span>{{item.contributors}}</span>
            </div>
        </template>

    `;
    }
}

window.customElements.define('my-view2', MyView2);