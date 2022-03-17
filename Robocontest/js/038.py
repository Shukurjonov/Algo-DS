W, H, d = map(int, input().split())

SW = 0
SH = 0
a = W//d
aq = W - a * d

b = H//d
bq = H - b * d

S = a * b * pow(d, 2) / 2
S1 = pow(d,2) / 2

if aq!= 0:
    if aq > 0 and aq <= d/2:
        SW = pow(aq,2)
    else:
        SW = (pow(d,2)/2 - pow(d-aq, 2))

if bq!= 0:
    if bq > 0 and bq <= d/2:
        SH = (pow(bq,2))
    else:
        SH = (pow(d,2)/2 - pow(d-bq, 2))

soha = 0
if aq != 0 or bq != 0:
    if 2*aq <= d and 2*bq <= d:
        if aq+bq-d/2 > 0:
            soha = pow(aq+bq-d/2,2)/2

    if 2*aq <= d and 2*bq >= d:
        if d/2 + aq - bq > 0:
            soha = pow(aq,2) - pow(d/2 + aq - bq, 2) / 2
        else:
            soha = pow(aq, 2)

    if 2*aq >= d and 2*bq <= d:
        if (aq - d/2)== 0 or(aq - d/2) / bq < 1:
            soha = pow(bq,2) - pow(-aq + bq + d/2, 2) / 2
        else:
            soha = pow(bq,2)

    if 2*aq >= d and 2*bq >= d:
        if 3 * d / 2 - aq - bq > 0:
            soha = pow(d,2) / 2 - pow(d-aq,2) - pow(d-bq,2) + pow(3*d/2-aq-bq, 2) / 2
        else:
            soha = pow(d, 2) / 2 - pow(d - aq, 2) - pow(d - bq, 2)


S = S + SW * b + SH * a + soha
print("{:.4f}".format(S))