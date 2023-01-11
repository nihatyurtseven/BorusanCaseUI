export enum OrderStatusEnum {
    "Sipariş Alındı" = 0,
    "Yola Çıktı" = 1,
    "Dağıtım Merkezinde" = 2,
    "Dağıtıma Çıktı" = 3,
    "Teslim Edildi" = 4,
    "Teslim Edilemedi" = 5,
}

export const OrderStatusEnumLabelMapping: Record<OrderStatusEnum, string> = {
    [OrderStatusEnum["Sipariş Alındı"]]: "Sipariş Alındı",
    [OrderStatusEnum["Yola Çıktı"]]: "Yola Çıktı",
    [OrderStatusEnum["Dağıtım Merkezinde"]]: "Dağıtım Merkezinde",
    [OrderStatusEnum["Dağıtıma Çıktı"]]: "Dağıtıma Çıktı",
    [OrderStatusEnum["Teslim Edildi"]]: "Teslim Edildi",
    [OrderStatusEnum["Teslim Edilemedi"]]: "Teslim Edilemedi",
};