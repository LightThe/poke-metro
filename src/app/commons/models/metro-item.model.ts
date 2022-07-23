export class MetroItem {
  constructor(title: string, sub?: string, linkTo?: string) {
    this.title = title;
    this.sub = sub!;
    this.linkTo = linkTo!;
  }

  title: string;
  sub: string;
  linkTo: string;
}
