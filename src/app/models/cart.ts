
export class Cart {
  userId: number;
  cartId: number;
  arrayAssessment: string[];
  quantity: number[];
  total: number;

  constructor(userId: number, cartId: number, arrayAssessment: string[] ,quantity: number[], total: number) {
    this.userId = userId;
    this.cartId = cartId;
    this.arrayAssessment = arrayAssessment;
    this.quantity = quantity;
    this.total = total;
  }
}
