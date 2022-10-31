import './styles/style.scss';

// /* カラーパレット要素の取得 */

abstract class InputElement {
  public targetElement: HTMLInputElement;
  protected type: string;

  constructor(public elemId: string) {
    this.elemId = elemId
    this.targetElement = document.getElementById(this.elemId) as HTMLInputElement;
  }

  public getInputValue(): string { return this.targetElement.value; }
  abstract inputChangeEvent(svg: HTMLElement): void;
}

class InputColor extends InputElement {
  private attributeName: string = 'fill';

  constructor(elemId: string) {
    super(elemId);
    this.type = 'color';
  }

  public inputChangeEvent(svg: HTMLElement): void {
    this.targetElement.addEventListener('change', () => {
      svg.setAttribute(this.attributeName, this.targetElement.value)
    });
  }
}

class SvgColor {
  private fill: string;
  private rgba: string;
  private arrayHex: Array<string>;
  private hexToRgba: string;

  constructor(fill: string = '', rgba: string = '') {
    this.fill = fill;
    this.rgba = rgba;
    this.arrayHex = this.splitArrayHex(this.fill);
    this.hexToRgba = this.changeHexToRgba(this.arrayHex);
  }

  public getFillHex(): string {
    if (this.fill != '') {
      return this.fill;
    }

    throw Error('値が空です。');
  }

  private changeRgbaToHex(rgba: string) {
    const rgbaArray: Array<string> = rgba.split(' ');

  }

  private changeHexToRgba(hexArray: Array<string>): string {
    let substring: string = '';
    for (let i = 0; i < hexArray.length; i++) {
      substring += hexArray[i];

      if (!(i == hexArray.length - 1)) {
        substring += ' ';
      }
    }

    return substring;
  }

  private splitArrayHex(hex: string): Array<string> {
    const hexArray: Array<string> = []
    const hexValue = hex.replace('#', '');

    if (!(hexValue.length == 6)) {
      throw Error();
    }

    for (let i = 0; i < hexValue.length; i += 2) {
      hexArray.push(hexValue.substring(i, i + 2))
    }
    return hexArray;
  }
}

const svg = document.getElementById('svg');

const colorPallet = document.getElementById('color-pallet') as HTMLInputElement;

colorPallet.addEventListener('change', () => {
  svg.setAttribute('fill', colorPallet.value);
})













