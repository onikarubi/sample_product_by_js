import './styles/style.scss';
import './user';

class ImageBox {
  private elements: Array<Element> = [];
  public value: string;
  public elemName: string;
  public pathElements: NodeListOf<Element>;

  constructor(name: string) {
    this.elemName = this.checkElementName(name);
    this.pathElements = document.querySelectorAll(`.${this.elemName} path`);
    console.log(this.pathElements)


    for (const element of document.getElementsByClassName(this.elemName)) {
      this.elements.push(element);
    }

    Array.prototype.forEach.call(this.elements, (element: HTMLElement, index) => {
      element.setAttribute('id', `${this.elemName}-${index + 1}`)
    });
  }

  private checkElementName(elemName: string): string {
    if (elemName === 'svg' || elemName === 'color-pallet') {
      return elemName;
    } else {
      throw new TypeError(`${elemName} is not found type.`);
    }
  }

  get getElements(): Array<Element> {
    if (!(this.elements.length == 0)) {
      return this.elements;
    }

    return undefined;
  }

  /*＊
  もし、path要素にfill属性が付属している場合は、
  path要素に付属しているfill属性を
  svg要素に付属させる初期化処理を行う
  **/
  private initSvgFill(element: Element): void {
    const currentId: string = element.getAttribute('id');
    const targetElement = document.querySelector(`${currentId} path`)
    const targetFill = targetElement.getAttribute('fill');
    targetElement.removeAttribute('fill');
    element.setAttribute('fill', targetFill);
  }

  public static factoryElements(typeName: string): Array<Element> {
    const imageBox: ImageBox = new ImageBox(typeName);
    return imageBox.getElements;
  }
}

/* カラーパレット、svg要素の変更 */

const sampleInstance = new ImageBox('color-pallet');
// console.log(sampleInstance.pathElements)

