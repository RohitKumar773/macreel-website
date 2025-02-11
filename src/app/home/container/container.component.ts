import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  selectedIndex: number = 0;

  features = [
    {
      name: 'Customized Solutions',
      title: 'We tailor our services to meet your unique needs.',
      description:
        'We tailor our services to meet your unique needs. Whether it’s website design, software development, or digital marketing, our solutions are crafted to align with your business goals and enhance your brand’s presence.',
      image: 'assets/solution.png',
    },
    {
      name: 'Cutting-Edge Technology',
      title: 'Stay ahead of the competition with our state-of-the-art technology.',
      description:
        'Stay ahead of the competition with our state-of-the-art technology. We use the latest tools and innovations to ensure your digital presence is modern, efficient, and effective.',
      image: 'assets/technology.png',
    },
    {
      name: 'Quality Assurance',
      title: 'We prioritize quality in every project.',
      description:
        'We prioritize quality in every project. Rigorous testing and quality checks guarantee that our solutions are reliable, secure, and performance driven.',
      image: 'assets/quality.png',
    },
    {
      name: 'Cost-Effective Solutions',
      title: 'Get the best value for your investment.',
      description:
        'Get the best value for your investment. Our services are designed to be affordable without compromising on quality, helping you achieve your business objectives within your budget. Your satisfaction is our priority. We provide transparent communication, timely updates, and responsive support to ensure your project runs smoothly and meets your expectations.',
      image: 'assets/cost.png',
    },
  ];

  selectFeature(index: number) {
    this.selectedIndex = index;
  }
}
