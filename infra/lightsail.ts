const publicKey = new sst.Secret("LightsailPublicKey", "public-key")

export const lightsailKeyPar = new aws.lightsail.KeyPair("KeyPair", {
    name: `${$app.stage}-keypair`,
    publicKey: publicKey.value,
})
