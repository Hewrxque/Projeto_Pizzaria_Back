import prismaClient from "../../prisma";

interface ItemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { RemoveItemService };
