import {CREATED_ON} from '../shared/created-on';
import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {Module} from '../../interfaces/module.interface';
import {PipeType} from '../../enums/pipe-type.enum';
import JSX from '../../jsx.compiler';
import {SHARED_CONFIG} from '../../consts/shared-config.const';
import {STATUS} from '../shared/status';

export const CERTIFICATES_MODULE: Module = {
  id: 'certificates',
  name: 'Certifikacije',
  layout: {
    editTitleKey: 'title',
    sort: CREATED_ON.sort,
    instance: {
      actions: [
        {
          value: it => JSX(<jms-e-change-url id={it.id} collection="pages" />)
        }
      ],
      segments: [
        {
          title: 'GENERAL',
          type: 'card',
          fields: [
            '/title',
            '/id'
          ],
          columnsDesktop: 6
        },
        META.segment({columnsDesktop: 6}),
        {
          type: 'empty',
          fields: [
            '/content'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        CREATED_ON.column(),
        {key: '/title', label: 'TITLE'},
        {
          key: '/id',
          label: 'URL',
          pipe: [PipeType.Custom],
          pipeArguments: {
            0: id => JSX(<a class="link" target="_blank" href={SHARED_CONFIG.webUrl + '/' + id}>{id}</a>)
          }
        },
        {key: '/active', label: 'ACTIVE', control: true},
        STATUS.column
      ],
    }
  },
  schema: {
    properties: {
      id: {type: 'string', pattern: '^[A-Za-z0-9\-\_]*$'},
      title: {type: 'string'},
      active: {type: 'boolean'},
      content: {type: 'string'},
      ...CREATED_ON.property,
      ...META.property(),
      ...STATUS.property
    },
    required: ['title']
  },
  definitions: {
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
      hint: 'ID_HINT'
    },
    title: {label: 'TITLE'},
    active: {label: ''},
    content: {
      component: {
        type: 'tinymce'
      }
    },
    ...CREATED_ON.definition(),
    ...META.definitions(),
    ...STATUS.definition
  }
};