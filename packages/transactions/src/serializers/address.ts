import { base58, Serializer, string } from '@metaplex-foundation/umi-serializers';
import { Base58EncodedAddress } from '@solana/keys';

export function getBase58EncodedAddressCodec(): Serializer<Base58EncodedAddress> {
    return string({
        description: __DEV__ ? 'A 32-byte account address' : '',
        encoding: base58,
        size: 32,
    }) as unknown as Serializer<Base58EncodedAddress>;
}