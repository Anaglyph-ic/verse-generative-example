const genererFigures = (hash, anaverse) => {
  const Random = function (n) {
    var r,
      $,
      t,
      u,
      _ = (function n(r) {
        for (var $ = 0, t = 1779033703 ^ r.length; $ < r.length; $++)
          t =
            ((t = Math.imul(t ^ r.charCodeAt($), 3432918353)) << 13) |
            (t >>> 19);
        return function () {
          return (
            (t = Math.imul(
              (t = Math.imul(t ^ (t >>> 16), 2246822507)) ^ (t >>> 13),
              3266489909
            )),
            (t ^= t >>> 16) >>> 0
          );
        };
      })(n),
      o = {
        rand:
          ((r = _()),
          ($ = _()),
          (t = _()),
          (u = _()),
          function () {
            t |= 0;
            var n = ((((r |= 0) + ($ |= 0)) | 0) + (u |= 0)) | 0;
            return (
              (u = (u + 1) | 0),
              (r = $ ^ ($ >>> 9)),
              ($ = (t + (t << 3)) | 0),
              (t = ((t = (t << 21) | (t >>> 11)) + n) | 0),
              (n >>> 0) / 4294967296
            );
          }),
        randInt: function (n, r) {
          return n + Math.floor((r - n) * o.rand());
        },
      };
    return o;
  };

  const prng = Random(hash);

  const figures = [];
  const features = {};
  const u = 1;

  const crdm = () => prng.randInt(-10, 10);

  const addcube = () =>
    figures.push({
      geometry: {
        type: "BoxGeometry", // Type of geometry
        args: [
          // Arguments relevant to the geometry (check THREE API)
          crdm() * u, // Cube width
          crdm() * u, // Cube height
          crdm() * u, // Cube depth
        ],
      },
      pos: {
        // Position
        x: crdm() * u,
        y: crdm() * u,
        z: crdm() * u,
      },
      rot: {
        // Rotation
        x: 0,
        y: 0,
        z: 0,
      },
      lines: true, // Display color segments (like wireframe, but faces not triangles)
      hatch: true, // Fill with white texture
      full: false,
    });

  for (let i = 0; i < prng.randInt(1, 15); i++) {
    addcube();
  }

  features.Name = "My ana[verse] project";

  return { figures, features };
};

export { genererFigures };
