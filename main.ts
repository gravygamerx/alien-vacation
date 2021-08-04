
let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
ship.setPosition(20, 60)
controller.moveSprite(ship, 0, 100)
ship.setStayInScreen(true)
game.onUpdateInterval(1000, function() {
    let rock = sprites.create(img`
        . . . . . . . . c c c c . . . .
        . . . . c c c c c c c c c . . .
        . . . c f c c a a a a c a c . .
        . . c c f f f f a a a c a a c .
        . . c c a f f c a a f f f a a c
        . . c c a a a a b c f f f a a c
        . c c c c a c c b a f c a a c c
        c a f f c c c a b b 6 b b b c c
        c a f f f f c c c 6 b b b a a c
        c a a c f f c a 6 6 b b b a a c
        c c b a a a a b 6 b b a b b a .
        . c c b b b b b b b a c c b a .
        . . c c c b c c c b a a b c . .
        . . . . c b a c c b b b c . . .
        . . . . c b b a a 6 b c . . . .
        . . . . . . b 6 6 c c . . . . .
    `,SpriteKind.Enemy)

rock.setPosition(160, randint(0, 120))
rock.vx = -40
rock.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onDestroyed(SpriteKind.Enemy, function(sprite: Sprite) {
    info.changeScoreBy(1)
})

info.setScore(0)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    game.over(false)
})