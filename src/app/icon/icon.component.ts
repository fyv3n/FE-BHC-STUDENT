import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img 
      [src]="'assets/' + name + '.svg'" 
      [alt]="alt"
      [width]="size"
      [height]="size"
      [style.filter]="getFilterForColor(color)"
      style="object-fit: contain;"
    />
  `,
  styles: [`
    img {
      display: inline-block;
      vertical-align: middle;
      margin-bottom: 2px;
    }
  `]
})
export class IconComponent {
  @Input() name!: string;
  @Input() size: number = 22;
  @Input() color?: string;
  @Input() alt: string = '';

  getFilterForColor(color?: string): string {
    if (!color) return 'none';
    
    // Convert hex to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
    // Create a filter that will make the SVG the desired color
    return `brightness(0) saturate(100%) invert(${r/255}) sepia(${g/255}) saturate(${b/255}) hue-rotate(0deg)`;
  }
}
