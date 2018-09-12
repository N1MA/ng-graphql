import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import StorageAPI from "./utility/storage-api";

@Component({
  selector: 'ngql-ng-graphql',
  template: `
    Im doing it
  `,
  styles: []
})
export class NgGraphqlComponent implements OnInit {
  @Input() fetcher: () => any;
  @Input() schema: any;
  @Input() query: string;
  @Input() variables: string;
  @Input() operationName: string;
  @Input() response: string;
  @Input() storage: {
    getItem: () => any,
    setItem: (key: any, value: any) => void,
    removeItem: (key: any) => void
  };
  @Input() defaultQuery: string;
  @Input() editorTheme: string;

  @Output() editQuery = new EventEmitter();
  @Output() editVariables = new EventEmitter();
  @Output() editOperationName = new EventEmitter();
  @Output() toggleDocs = new EventEmitter();
  @Output() toggleHistory = new EventEmitter();

  private _storage: StorageAPI;
  private _editorQueryID: number;

  constructor() { }

  ngOnInit() {
    if (typeof this.fetcher !== 'function') {
      throw new TypeError('NgGraphiQL requires a fetcher function.');
    }

    // Cache the storage instance
    this._storage = new StorageAPI(this.storage);

    // Determine the initial query to display.
    const query = this.query !== undefined
      ? this.query
      : this._storage.get('query') !== null
        ? this._storage.get('query')
        : this.defaultQuery !== undefined ? this.defaultQuery : defaultQuery;

    // Get the initial query facts.
    const queryFacts = getQueryFacts(this.schema, query);

    // Determine the initial variables to display.
    const variables = this.variables !== undefined
      ? this.variables
      : this._storage.get('variables');

    // Determine the initial operationName to use.
    const operationName = this.operationName !== undefined
      ? this.operationName
      : getSelectedOperationName(
        null,
        this._storage.get('operationName'),
        queryFacts && queryFacts.operations,
      );


    // Ensure only the last executed editor query is rendered.
    this._editorQueryID = 0;

    // Subscribe to the browser window closing, treating it as an unmount.
    if (typeof window === 'object') {
      window.addEventListener('beforeunload', () => {
          return this.componentWillUnmount();
        },
      );
    }
  }
}
