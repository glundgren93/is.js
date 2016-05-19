/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-unused-expressions: 0 */

describe( 'bundle:array' , function () {

  var arrayLikeObject = { length : 0 }
  var argumentsObject = ( function () { return arguments } )()

  it( 'is.array' , function () {

    expect( is.array( [] ) ).to.be.true
    expect( is.array( arrayLikeObject ) ).to.be.false
    expect( is.array( argumentsObject ) ).to.be.false

    expect( is.not.array( [] ) ).to.be.false
    expect( is.not.array( arrayLikeObject ) ).to.be.true
    expect( is.not.array( argumentsObject ) ).to.be.true

  } )

  it( 'is.arrayLike' , function () {

    expect( is.arrayLike( '' ) ).to.be.true
    expect( is.arrayLike( [] ) ).to.be.true
    expect( is.arrayLike( arrayLikeObject ) ).to.be.true
    expect( is.arrayLike( argumentsObject ) ).to.be.true
    expect( is.arrayLike( function () {} ) ).to.be.false

    expect( is.not.arrayLike( '' ) ).to.be.false
    expect( is.not.arrayLike( [] ) ).to.be.false
    expect( is.not.arrayLike( arrayLikeObject ) ).to.be.false
    expect( is.not.arrayLike( argumentsObject ) ).to.be.false
    expect( is.not.arrayLike( function () {} ) ).to.be.true

  } )
  it( 'is.arrayLikeObject' , function () {

    expect( is.arrayLikeObject( '' ) ).to.be.false
    expect( is.arrayLikeObject( [] ) ).to.be.true
    expect( is.arrayLikeObject( arrayLikeObject ) ).to.be.true
    expect( is.arrayLikeObject( argumentsObject ) ).to.be.true
    expect( is.arrayLikeObject( function () {} ) ).to.be.false

    expect( is.not.arrayLikeObject( '' ) ).to.be.true
    expect( is.not.arrayLikeObject( [] ) ).to.be.false
    expect( is.not.arrayLikeObject( arrayLikeObject ) ).to.be.false
    expect( is.not.arrayLikeObject( argumentsObject ) ).to.be.false
    expect( is.not.arrayLikeObject( function () {} ) ).to.be.true

  } )

  it( 'is.arguments' , function () {

    expect( is.arguments( [] ) ).to.be.false
    expect( is.arguments( arrayLikeObject ) ).to.be.false
    expect( is.arguments( argumentsObject ) ).to.be.true

    expect( is.not.arguments( [] ) ).to.be.true
    expect( is.not.arguments( arrayLikeObject ) ).to.be.true
    expect( is.not.arguments( argumentsObject ) ).to.be.false

  } )

} )
