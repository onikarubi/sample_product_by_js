import './styles/style.scss';

interface HtmlElement {
  targetName: string;
  getElements(): HTMLCollectionOf<Element>;
  elementsChangeEvent(elements: HTMLCollectionOf<Element>): void;
}

// /* カラーパレット、svg要素の変更 */

abstract class InputElement {
  protected targetElement: HTMLInputElement;
  protected type: string;

  constructor(public elemId: string) {
    this.elemId = elemId
    this.targetElement = document.getElementById(this.elemId) as HTMLInputElement;
  }

  get getInputValue(): string { return this.targetElement.value; }
  abstract inputChangeEvent(svg: HTMLElement): void;
  abstract displayProperty<T, U>(type: T, elemId: U);
}

class InputColor extends InputElement {
  private attributeName: string;
  constructor(elemId: string) {
    super(elemId);
    this.type = 'color';
    this.attributeName = 'fill';
  }

  public inputChangeEvent(svg: HTMLElement): void {
    this.targetElement.addEventListener('input', () => {
      svg.setAttribute(this.attributeName, this.targetElement.value)
    });
  }

  public displayProperty<T, U>(type: T, elemId: U) {
    return {
      inputType: type,
      targetId: elemId
    }
  }

  public get typeValue(): string {
    if (this.type) {
      return this.type;
    } else {
      throw new Error('値が空です。')
    }
  }

  public get elemIdValue(): string {
    if (this.elemId) {
      return this.elemId;
    } else {
      throw new Error('値が空です。')
    }
  }
}

const svgBox: HTMLCollectionOf<Element> = document.getElementsByClassName('svg-box');
const svgElements: HTMLCollectionOf<Element> = document.getElementsByClassName('svg');
const colorElements: HTMLCollectionOf<Element> = document.getElementsByClassName('color-pallet');

const elementChangeEvent = (elements: HTMLCollectionOf<Element>, event: Function): void => {
  for (const element of elements) {
    event(element);
  }
}
elementChangeEvent(svgElements, console.log)


// let counter: number = 0;
// console.log(getGenerateId(svgBox.length, 'color-pallet'))



// const setAttributesId = (id: number): void => {
//   svgElements[id].setAttribute('id', `svg-${id + 1}`);
//   colorElements[id].setAttribute('id', `color-pallet-${id + 1}`);
// }

// const changeSvgColor = (id: number): void => {
//   const svg: HTMLElement = document.getElementById(`svg-${id + 1}`);
//   const inputElement: InputColor = new InputColor(`color-pallet-${id + 1}`);
//   inputElement.inputChangeEvent(svg);
// }

// for (let i = 0; i < svgBox.length; i++) {
//   let referencedId: number = i;
//   setAttributesId(referencedId);
//   changeSvgColor(referencedId);
// }

// const svgIdList: Array<string> = [];
// const colorIdList: Array<string> = [];

// for (let i = 0; i < svgElements.length; i++) {
//   svgElements[i].setAttribute('id', `svg${i + 1}`);
//   colorElements[i].setAttribute('id', `color-pallet-${i + 1}`);
//   svgIdList.push(svgElements[i].getAttribute('id'))
//   colorIdList.push(colorElements[i].getAttribute('id'))
// }

// const sampleInput = new InputColor('color-pallet-1')
// const sampleInput2 = new InputColor('color-pallet-2')
// const sampleInput3 = new InputColor('color-pallet-3')
// const sampleSVG = document.getElementById('svg1')
// const sampleSVG2 = document.getElementById('svg2')
// const sampleSVG3 = document.getElementById('svg3')

// sampleInput.inputChangeEvent(sampleSVG);
// sampleInput2.inputChangeEvent(sampleSVG2);
// sampleInput3.inputChangeEvent(sampleSVG3);



