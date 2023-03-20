import {CREATED_ON} from '../shared/created-on';
import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {Module} from '../../interfaces/module.interface';
import {PipeType} from '../../enums/pipe-type.enum';
import JSX from '../../jsx.compiler';
import {SHARED_CONFIG} from '../../consts/shared-config.const';
import {STATUS} from '../shared/status';

export const FORMS_MODULE: Module = {
  id: 'forms',
  name: 'Obrasci',
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
            '/url',
            '/file'
          ],
          columnsDesktop: 6
        }
      ]
    },
    table: {
      tableColumns: [
        CREATED_ON.column(),
        {key: '/title', label: 'TITLE'},
        {
          key: '/url',
          label: 'URL',
          pipe: [PipeType.Custom],
          pipeArguments: {
            0: id => JSX(<a class="link" target="_blank" href={id}>{id}</a>)
          }
        },
        {
          key: '/file',
          label: 'File',
          pipe: [PipeType.Custom],
          pipeArguments: {
            0: id => JSX(<a class="link" target="_blank" href={id}>{id}</a>)
          }
        },
        {key: '/active', label: 'ACTIVE', control: true},
        STATUS.column
      ],
    }
  },
  schema: {
    properties: {
      url: {type: 'string'},
      title: {type: 'string'},
      file: {type: 'string'},
      active: {type: 'boolean'},
      ...CREATED_ON.property,
      ...META.property(),
      ...STATUS.property
    },
    required: ['title']
  },
  definitions: {
    url: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
    },
    file: {
      label: 'File',
      component: {
        type: 'file'
      }
    },
    title: {label: 'Tekst linka'},
    active: {label: ''},
    ...CREATED_ON.definition(),
    ...META.definitions(),
    ...STATUS.definition
  }
};