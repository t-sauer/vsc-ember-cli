import {
  CompletionItemProvider,
  TextDocument,
  Position,
  CancellationToken,
  CompletionItem,
  CompletionItemKind,
  Range
} from 'vscode';

interface CompletionConfigurationObject {
  label: string,
  kind?: CompletionItemKind,
  detail?: string,
  documentation?: string,
  insertText?: string,
  childs?: CompletionConfigurationObject[]
}

const emberCompletionsConfigurations: CompletionConfigurationObject[] = [{
  label: 'action',
  kind: CompletionItemKind.Function,
  insertText: 'action \'name\'',
  childs: [{
    label: 'bubbles',
    kind: CompletionItemKind.Property
  }, {
    label: 'preventDefault',
    kind: CompletionItemKind.Property
  }, {
    label: 'on',
    kind: CompletionItemKind.Property
  }, {
    label: 'allowedKeys',
    kind: CompletionItemKind.Property
  }, {
    label: 'target',
    kind: CompletionItemKind.Property
  }]
}, {
  label: 'component',
  kind: CompletionItemKind.Function,
  insertText: 'if \'name\''
}, {
  label: 'concat',
  kind: CompletionItemKind.Function
}, {
  label: 'debugger',
  kind: CompletionItemKind.Function,
}, {
  label: 'each',
  kind: CompletionItemKind.Function,
  insertText: 'each someArray as |arrayItem|',
  childs: [{
    label: 'key',
    kind: CompletionItemKind.Property
  }]
}, {
  label: 'each-in',
  kind: CompletionItemKind.Function,
  insertText: 'each-in myObject as |key value|'
}, {
  label: 'get',
  kind: CompletionItemKind.Function,
  insertText: 'get object key'
}, {
  label: 'hash',
  kind: CompletionItemKind.Function
}, {
  label: 'if',
  kind: CompletionItemKind.Function
}, {
  label: 'input',
  kind: CompletionItemKind.Function,
  childs: [{
    label: 'readonly',
    kind: CompletionItemKind.Property
  }, {
    label: 'required',
    kind: CompletionItemKind.Property
  }, {
    label: 'autofocus',
    kind: CompletionItemKind.Property
  }, {
    label: 'value',
    kind: CompletionItemKind.Property
  }, {
    label: 'placeholder',
    kind: CompletionItemKind.Property
  }, {
    label: 'disabled',
    kind: CompletionItemKind.Property
  }, {
    label: 'size',
    kind: CompletionItemKind.Property
  }, {
    label: 'tabindex',
    kind: CompletionItemKind.Property
  }, {
    label: 'maxlength',
    kind: CompletionItemKind.Property
  }, {
    label: 'name',
    kind: CompletionItemKind.Property
  }, {
    label: 'min',
    kind: CompletionItemKind.Property
  }, {
    label: 'max',
    kind: CompletionItemKind.Property
  }, {
    label: 'pattern',
    kind: CompletionItemKind.Property
  }, {
    label: 'accept',
    kind: CompletionItemKind.Property
  }, {
    label: 'autocomplete',
    kind: CompletionItemKind.Property
  }, {
    label: 'autosave',
    kind: CompletionItemKind.Property
  }, {
    label: 'formaction',
    kind: CompletionItemKind.Property
  }, {
    label: 'formenctype',
    kind: CompletionItemKind.Property
  }, {
    label: 'formmethod',
    kind: CompletionItemKind.Property
  }, {
    label: 'formnovalidate',
    kind: CompletionItemKind.Property
  }, {
    label: 'formtarget',
    kind: CompletionItemKind.Property
  }, {
    label: 'height',
    kind: CompletionItemKind.Property
  }, {
    label: 'inputmode',
    kind: CompletionItemKind.Property
  }, {
    label: 'multiple',
    kind: CompletionItemKind.Property
  }, {
    label: 'step',
    kind: CompletionItemKind.Property
  }, {
    label: 'width',
    kind: CompletionItemKind.Property
  }, {
    label: 'form',
    kind: CompletionItemKind.Property
  }, {
    label: 'selectionDirection',
    kind: CompletionItemKind.Property
  }, {
    label: 'spellcheck',
    kind: CompletionItemKind.Property
  }, {
    label: 'type',
    kind: CompletionItemKind.Property
  }, {
    label: 'action',
    kind: CompletionItemKind.Property
  }, {
    label: 'enter',
    kind: CompletionItemKind.Property
  }, {
    label: 'insert-newline',
    kind: CompletionItemKind.Property
  }, {
    label: 'escape-press',
    kind: CompletionItemKind.Property
  }, {
    label: 'focus-in',
    kind: CompletionItemKind.Property
  }, {
    label: 'focus-out',
    kind: CompletionItemKind.Property
  }, {
    label: 'key-press',
    kind: CompletionItemKind.Property
  }, {
    label: 'key-up',
    kind: CompletionItemKind.Property
  }, {
    label: 'checked',
    kind: CompletionItemKind.Property
  }, {
    label: 'indeterminate',
    kind: CompletionItemKind.Property
  }]
}, {
  label: 'link-to',
  kind: CompletionItemKind.Function,
  childs: [{
    label: 'tagName',
    kind: CompletionItemKind.Property
  }, {
    label: 'disabled',
    kind: CompletionItemKind.Property
  }, {
    label: 'disabledWhen',
    kind: CompletionItemKind.Property
  }, {
    label: 'activeClass',
    kind: CompletionItemKind.Property
  }, {
    label: 'current-when',
    kind: CompletionItemKind.Property
  }, {
    label: 'preventDefault',
    kind: CompletionItemKind.Property
  }, {
    label: 'ariaRole',
    kind: CompletionItemKind.Property
  }, {
    label: 'title',
    kind: CompletionItemKind.Property
  }, {
    label: 'target',
    kind: CompletionItemKind.Property
  }, {
    label: 'rel',
    kind: CompletionItemKind.Property
  }, {
    label: 'replace',
    kind: CompletionItemKind.Property
  }, {
    label: 'tabindex',
    kind: CompletionItemKind.Property
  }]
}, {
  label: 'loc',
  kind: CompletionItemKind.Function
}, {
  label: 'log',
  kind: CompletionItemKind.Function
}, {
  label: 'mut',
  kind: CompletionItemKind.Function
}, {
  label: 'outlet',
  kind: CompletionItemKind.Function
}, {
  label: 'partial',
  kind: CompletionItemKind.Function
}, {
  label: 'query-params',
  kind: CompletionItemKind.Function
}, {
  label: 'render',
  kind: CompletionItemKind.Function
}, {
  label: 'textarea',
  kind: CompletionItemKind.Function,
  childs: [{
    label: 'value',
    kind: CompletionItemKind.Property
  }, {
    label: 'name',
    kind: CompletionItemKind.Property
  }, {
    label: 'rows',
    kind: CompletionItemKind.Property
  }, {
    label: 'cols',
    kind: CompletionItemKind.Property
  }, {
    label: 'placeholder',
    kind: CompletionItemKind.Property
  }, {
    label: 'disabled',
    kind: CompletionItemKind.Property
  }, {
    label: 'maxlength',
    kind: CompletionItemKind.Property
  }, {
    label: 'tabindex',
    kind: CompletionItemKind.Property
  }, {
    label: 'selectionEnd',
    kind: CompletionItemKind.Property
  }, {
    label: 'selectionStart',
    kind: CompletionItemKind.Property
  }, {
    label: 'wrap',
    kind: CompletionItemKind.Property
  }, {
    label: 'readonly',
    kind: CompletionItemKind.Property
  }, {
    label: 'autofocus',
    kind: CompletionItemKind.Property
  }, {
    label: 'form',
    kind: CompletionItemKind.Property
  }, {
    label: 'spellcheck',
    kind: CompletionItemKind.Property
  }, {
    label: 'required',
    kind: CompletionItemKind.Property
  }, {
    label: 'action',
    kind: CompletionItemKind.Property
  }, {
    label: 'enter',
    kind: CompletionItemKind.Property
  }, {
    label: 'insert-newline',
    kind: CompletionItemKind.Property
  }, {
    label: 'escape-press',
    kind: CompletionItemKind.Property
  }, {
    label: 'focus-in',
    kind: CompletionItemKind.Property
  }, {
    label: 'focus-out',
    kind: CompletionItemKind.Property
  }, {
    label: 'key-press',
    kind: CompletionItemKind.Property
  }]
}, {
  label: 'unbound',
  kind: CompletionItemKind.Function
}, {
  label: 'unless',
  kind: CompletionItemKind.Function
}, {
  label: 'with',
  kind: CompletionItemKind.Function
}];

const emberCompletionItems: CompletionItem[] = emberCompletionsConfigurations.map(createCompletionItem);

function createCompletionItem(configuration: CompletionConfigurationObject): CompletionItem {
  const item = new CompletionItem(configuration.label);
  item.kind = configuration.kind || CompletionItemKind.Function;
  item.detail = configuration.detail;
  item.documentation = configuration.documentation;
  item.insertText = configuration.insertText;

  return item;
}

export class EmberCompletionItemProvider implements CompletionItemProvider {
  public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): CompletionItem[] {

    const range: Range = new Range(position.line, position.character - 1 , position.line, position.character);
    const autoCompletionTrigger: string = document.getText(range);
    let isValidTrigger: boolean = false;

    if (autoCompletionTrigger === '{') {
      const charBeforeTrigger = document.getText(new Range(position.line, position.character - 2, position.line, position.character - 1));

      isValidTrigger = charBeforeTrigger === '{';
    } else if (autoCompletionTrigger === '(') {
      isValidTrigger = true;
    } else if (autoCompletionTrigger === ' ') {
      let contextKeyword = this.getContextKeyword(document, position);

      if (contextKeyword) {
        isValidTrigger = true;
      } else {
        return [];
      }

      return emberCompletionsConfigurations
        .find((config) => config.label === contextKeyword)
        .childs
        .map(createCompletionItem)
    }

    if (!isValidTrigger) {
      return [];
    }

    return emberCompletionItems;
  }

  private getContextKeyword(document: TextDocument, position: Position): string {
    let startCharacter: string = null;
    let positionCharacter = position.character;
    let positionLine = position.line;

    while(true) {
      let currentCharacter = document.getText(new Range(positionLine, positionCharacter, positionLine, positionCharacter - 1));


      if (currentCharacter === '(' ||
        (
          currentCharacter === '{' &&
          document.getText(new Range(positionLine, positionCharacter, positionLine, positionCharacter - 2)) === '{{'
        )
      ) {
        break;
      }

      positionCharacter--;

      if (positionLine <= 0 && positionCharacter <= 0) {
        break;
      }

      if (positionCharacter <= 0) {
        positionLine--;
        positionCharacter = document.lineAt(positionLine).text.length;
      }
    }

    let keyword: string = '';
    while (true) {
      const char = document.getText(new Range(positionLine, positionCharacter, positionLine, positionCharacter + 1));
      keyword += char;

      if (char === '}' || char === ')' || char === ' ') {
        break;
      }

      positionCharacter++;
    }

    return keyword.trim();
  }
}
