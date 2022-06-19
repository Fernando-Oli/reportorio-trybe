const order = {
    name: 'Fernando Oliveira',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      name: 'Luiz Silva',
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 10,
    },
  };
  const maguePrice = order.order.pizza.marguerita.price
  const pepePrice = order.order.pizza.pepperoni.price
  const deliveryPrice = order.order.delivery.price;
  const drinkPrice = order.order.drinks.coke.price
  order.payment.total= maguePrice + pepePrice + deliveryPrice + deliveryPrice + drinkPrice;
  const customerInfo = () => {
    // Adicione abaixo as informações necessárias.
    const entregadora = order.order.delivery.deliveryPerson
    const cliente = order.name
    const telefone = order.phoneNumber
    const endereco = Object.values(order.address);

    console.log(`Olá ${entregadora}, entrega para: ${cliente}, Telefone: ${telefone}, R.${endereco[0]}, Nº: ${endereco[1]}, AP: ${endereco[2]}.`)
  
  }
  
  customerInfo(order);
  
  const orderModifier = () => {
    // Adicione abaixo as informações necessárias.
    const cliente = order.name
    const pizza = Object.keys(order.order.pizza);
    const coca = Object.values(order.order.drinks.coke)
    const total = Object.values(order.payment)
    console.log(`Olá ${cliente}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coca[0]} é R$ ${total},00.` )
  }
  
  orderModifier(order);